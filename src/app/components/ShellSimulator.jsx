import React, { useState, useRef, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const ShellSimulator = () => {
  const [history, setHistory] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [currentPath, setCurrentPath] = useState('~');
  const [fileSystem, setFileSystem] = useState({
    '~': {
      type: 'dir',
      contents: {
        'documents': { type: 'dir', contents: {} },
        'downloads': { type: 'dir', contents: {} },
        'hello.txt': { type: 'file', content: 'Hello, World!' }
      }
    }
  });
  
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(currentInput);
      setCurrentInput('');
    }
  };

  const parseCommand = (input) => {
    const parts = input.trim().split(/\s+/);
    return {
      command: parts[0],
      args: parts.slice(1)
    };
  };

  const getDirectoryContents = (path) => {
    const parts = path.split('/').filter(p => p && p !== '~');
    let current = fileSystem['~'];
    
    for (const part of parts) {
      if (current.contents[part]) {
        current = current.contents[part];
      } else {
        return null;
      }
    }
    
    return current;
  };

  const executeCommand = (input) => {
    const { command, args } = parseCommand(input);
    const newEntry = { input, output: [], path: currentPath };

    switch (command.toLowerCase()) {
      case 'ls':
        const contents = getDirectoryContents(currentPath);
        if (contents && contents.type === 'dir') {
          const files = Object.entries(contents.contents).map(([name, data]) => ({
            name,
            type: data.type
          }));
          newEntry.output = files.map(f => 
            `${f.type === 'dir' ? 'dir' : 'file'}  ${f.name}`
          );
        }
        break;

      case 'pwd':
        newEntry.output = [currentPath];
        break;

      case 'cd':
        if (args[0] === '..') {
          if (currentPath !== '~') {
            const newPath = currentPath.split('/').slice(0, -1).join('/') || '~';
            setCurrentPath(newPath);
            newEntry.output = [`Changed directory to ${newPath}`];
          }
        } else if (args[0]) {
          const targetPath = args[0].startsWith('/')
            ? args[0]
            : `${currentPath === '~' ? '' : currentPath}/${args[0]}`;
          const target = getDirectoryContents(targetPath);
          
          if (target && target.type === 'dir') {
            setCurrentPath(targetPath);
            newEntry.output = [`Changed directory to ${targetPath}`];
          } else {
            newEntry.output = [`cd: ${args[0]}: No such directory`];
          }
        }
        break;

      case 'cat':
        if (args[0]) {
          const contents = getDirectoryContents(currentPath);
          if (contents && contents.contents[args[0]]) {
            const file = contents.contents[args[0]];
            if (file.type === 'file') {
              newEntry.output = [file.content];
            } else {
              newEntry.output = [`cat: ${args[0]}: Is a directory`];
            }
          } else {
            newEntry.output = [`cat: ${args[0]}: No such file`];
          }
        }
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'help':
        newEntry.output = [
          'Available commands:',
          'ls - List directory contents',
          'pwd - Print working directory',
          'cd <dir> - Change directory',
          'cat <file> - Display file contents',
          'clear - Clear the terminal',
          'help - Show this help message'
        ];
        break;

      default:
        newEntry.output = [`Command not found: ${command}`];
    }

    setHistory([...history, newEntry]);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-xl">
      {/* Terminal Header */}
      <div className="bg-gray-800 p-2 flex items-center gap-2">
        <Terminal className="text-gray-400" size={20} />
        <span className="text-gray-200 font-mono">Shell Simulator</span>
      </div>

      {/* Terminal Body */}
      <div 
        ref={terminalRef}
        className="h-96 p-4 font-mono text-sm text-gray-200 overflow-y-auto"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Command History */}
        {history.map((entry, i) => (
          <div key={i} className="mb-2">
            <div className="flex items-center gap-2">
              <span className="text-green-400">user@shell</span>
              <span className="text-gray-400">:</span>
              <span className="text-blue-400">{entry.path}</span>
              <span className="text-gray-400">$</span>
              <span className="text-gray-200">{entry.input}</span>
            </div>
            {entry.output.map((line, j) => (
              <div key={j} className="ml-4 text-gray-300">
                {line}
              </div>
            ))}
          </div>
        ))}

        {/* Current Input Line */}
        <div className="flex items-center gap-2">
          <span className="text-green-400">user@shell</span>
          <span className="text-gray-400">:</span>
          <span className="text-blue-400">{currentPath}</span>
          <span className="text-gray-400">$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-gray-200"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default ShellSimulator;