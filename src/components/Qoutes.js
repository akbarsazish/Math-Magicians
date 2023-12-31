import React, { useState, useEffect } from 'react';

const Qoutes = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=education',
          {
            headers: {
              'X-Api-Key': 'RnsRXQB+C1lXlbhnahF5Rw==3ZjEYCzgkEmEnVdP',
            },
          },
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setQuote(data[0]);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch quote.');
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) {
    return <div data-testid="loadingState">Loading...</div>;
  }

  if (error) {
    /* eslint-disable */
    return <div data-testid="errorState">Error: {error}</div>;
  }
  return (
    <div data-testid="quote" className="quote">
      <p className="qouteText"> {quote.quote} - {quote.author} </p>
    </div>
  );
};

export default Qoutes;
