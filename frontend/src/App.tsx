import React, { useState } from 'react';
import './App.css';

const API_URL = '/analyze';

function App() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{emotion: string, confidence: number} | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });
      // To Handle the error if the API is not working
      if (!response.ok) throw new Error('API error');
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="emoiq-container">
      <h1 className="emoiq-title">EMOIQ</h1>
      <form className="emoiq-form" onSubmit={handleSubmit}>
        <label htmlFor="reflection" className="emoiq-label">How are you feeling today?</label>
        <textarea
          id="reflection"
          className="emoiq-textarea"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Type your reflection..."
          rows={4}
          required
        />
        <button className="emoiq-submit" type="submit" disabled={loading || !text.trim()}>
          {/* To show the loading state if the API is working  */}
          {loading ? 'Analyzing...' : 'Submit'}
        </button>
      </form>
      {error && <div className="emoiq-error">{error}</div>}
      {result && (
        <div className="emoiq-result-card">
          <div className="emoiq-result-emotion">{result.emotion}</div>
          <div className="emoiq-result-confidence">Confidence: {(result.confidence * 100).toFixed(0)}%</div>
        </div>
      )}
    </div>
  );
}

export default App;
