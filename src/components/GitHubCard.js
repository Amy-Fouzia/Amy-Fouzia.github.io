import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, CardActions, Button, CircularProgress } from '@mui/material';
const token = process.env.REACT_APP_GITHUB_TOKEN;

const GitHubCard = ({ username, repoName }) => {
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepoData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${username}/${repoName}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setRepo(response.data);
      } catch (error) {
        console.error('Error fetching GitHub repository data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepoData();
  }, [username, repoName]);

  if (loading) {
    return <CircularProgress sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '20px auto' }} />;
  }

  if (!repo) {
    return <Typography variant="body1" align="center">Repository not found.</Typography>;
  }

  return (
    <Card sx={{ minWidth: 400, margin: '20px auto', color: '#829bc4',}}>
      <CardContent>
        <Typography variant="h5">{repo.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {repo.description || 'No description available'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </Button>
      </CardActions>
    </Card>
  );
};

export default GitHubCard;
