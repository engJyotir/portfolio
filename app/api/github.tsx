// pages/api/githubActivity.js

export default async function handler(req, res) {
    const username = 'engJyotir';
    const token = process.env.GITHUB_TOKEN; // Optional: Use a GitHub token for higher rate limits
  
    try {
      const response = await fetch(`https://api.github.com/users/${engJyotir}/events`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined,
        },
      });
  
      if (!response.ok) {
        return res.status(response.status).json({ message: 'Error fetching GitHub activity' });
      }
  
      const data = await response.json();
      res.status(200).json(data); // Send fetched data to the client
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  