import React from 'react';

export function SubmitButton({ count } : { count: number }) {
    return (
      <button
        className={count > 0 ? "primary" : ""}
        type="submit">
        <div style={{ display: "flex", gap: 10 }}>
          <div>
            Fill
          </div>
          <div style={{
            opacity: 0.5,
          }}>
            {count}
          </div>
        </div>
      </button>
    )
  }