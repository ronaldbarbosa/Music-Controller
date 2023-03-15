import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Room() {
    const [votesToSkip, setVotesToSkip] = useState(2);
    const [guesCanPause, setGuestCanPause] = useState(false);
    const [isHost, setIsHost] = useState(false);
    const [roomCode, setRoomCode] = useState(useParams());
    getRoomDetails();

    function getRoomDetails() {
        fetch('/api/get-room' + '?code=' + roomCode.roomCode)
            .then((response) => response.json())
            .then((data) => {
                setVotesToSkip(data.votes_to_skip),
                setGuestCanPause(data.guest_can_pause),
                setIsHost(data.is_host)
            })
    }

    return (
        <div>
            <h3>{ roomCode.roomCode }</h3>
            <p>Votes: { votesToSkip }</p>
            <p>Guest Can Pause: { guesCanPause.toString() }</p>
            <p>Host: { isHost.toString() }</p>
        </div>
    )
}