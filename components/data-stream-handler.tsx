'use client';

import { useEffect, useRef } from 'react';
import { useArtifact } from '@/hooks/use-artifact';
import { useDataStream } from './data-stream-provider';

export function DataStreamHandler() {
  const { dataStream } = useDataStream();

  const { artifact, setArtifact, setMetadata } = useArtifact();
  const lastProcessedIndex = useRef(-1);

  useEffect(() => {
    if (!dataStream?.length) return;

    const newDeltas = dataStream.slice(lastProcessedIndex.current + 1);
    lastProcessedIndex.current = dataStream.length - 1;

    newDeltas.forEach((delta) => {
      artifact.onStreamPart?.({
        streamPart: delta,
        setArtifact,
        setMetadata,
      });
    });
  }, [dataStream, setArtifact, setMetadata, artifact]);

  return null;
}
