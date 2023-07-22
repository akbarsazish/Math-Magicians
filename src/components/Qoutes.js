import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=computers&limit=1',
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
        console.log('Response data:', data);
        setQuote(data.quotes.quote);
        setLoading(false);
      } catch (error) {
        console.error('Fetch error:', error);
        setError('Failed to fetch quote.');
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    /* eslint-disable */
    return <div>Error: {error}</div>;
  }
  return <div className="quote">{quote}</div>;
};

export default Quote;
