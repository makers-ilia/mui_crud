import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

interface MediaControlCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const MediaControlCard: React.FC<MediaControlCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  const [isPlaying, setPlaying] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!isPlaying);
  };

  return (
    <Card>
      <CardMedia component="img" height="140" image={imageUrl} alt={title} />
      <CardContent>
        <h2>{title}</h2>
        <p>{description}</p>
      </CardContent>
      <CardActions>
        <IconButton onClick={handlePlayPause} aria-label="play/pause">
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        <IconButton aria-label="volume" disabled>
          <VolumeUpIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MediaControlCard;
