import React from 'react';
import { ReactFlow, Background } from '@xyflow/react';

export default function MLConceptsExplorer() {
  const elements = [
    // Nodes
    { id: '1', data: { label: 'AI' }, position: { x: 300, y: 0 }, style: { background: '#E2E8F0', padding: 10 } },
    { id: '2', data: { label: 'Machine Learning' }, position: { x: 100, y: 150 }, style: { background: '#CBD5E0', padding: 10 } },
    { id: '3', data: { label: 'Deep Learning' }, position: { x: 500, y: 150 }, style: { background: '#A0AEC0', padding: 10 } },
    { id: '4', data: { label: 'Supervised Learning' }, position: { x: 50, y: 300 }, style: { background: '#CBD5E0', padding: 10 } },
    { id: '5', data: { label: 'Unsupervised Learning' }, position: { x: 150, y: 300 }, style: { background: '#CBD5E0', padding: 10 } },
    // Edges
    { id: 'e1-2', source: '1', target: '2', animated: true, label: 'subset' },
    { id: 'e1-3', source: '1', target: '3', animated: true, label: 'subset' },
    { id: 'e2-4', source: '2', target: '4', animated: true },
    { id: 'e2-5', source: '2', target: '5', animated: true },
  ];

  const graphStyles = { width: '100%', height: '100%' };

  return (
    <ReactFlow elements={elements} style={graphStyles} zoomOnScroll={false}>
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  );
}