"use client";
// pages/activity.js

import { useState, useEffect } from 'react';

export default function Activity() {
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const response = await fetch('/api/githubActivity');
        const data = await response.json();
        setActivity(data);
      } catch (error) {
        console.error('Error fetching activity:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivity();
  }, []);

  if (loading) return <p>Loading activity...</p>;

  return (
    <div>
      <h1>GitHub Activity for engJyotir</h1>
      <ul>
        {activity.slice(0, 10).map((event, index) => (
          <li key={index}>
            <strong>{event.type}</strong> on <a href={`https://github.com/${event.repo.name}`}>{event.repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
