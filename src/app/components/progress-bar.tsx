import React from 'react';

export function ProgressBar({ progress }: { progress: number }) {
    return (
      <div>
        <div
          style={{
            width: '100%',
            height: 10,
            backgroundColor: '#eee',
            borderRadius: 5,
            marginTop: 10,
          }}
        >
          <div
            style={{
              width: `${progress * 100}%`,
              transition: 'width 0.1s',
              height: '100%',
              backgroundColor: 'black',
              borderRadius: 5,
            }}
          ></div>
        </div>
        {progress * 100}%
      </div>
    );
  }
  