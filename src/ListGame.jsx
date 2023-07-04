import React, { useEffect, useState } from 'react';
import "./listgame.css"

function GameList() {
    const [gameData, setGameData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '4b8d2ad2c5msh6299dea0047d58fp170001jsndae21877cf12',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setGameData(result);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='container-game'>
            <h1>Danh sách game</h1>
            <ul className='list-game'>
                {gameData.map(game => (
                    <li key={game.id} className='card-game'>
                        <a href={game.game_url}>
                            <img src={game.thumbnail} />
                            <h2> {game.title} </h2>
                            <p>{game.short_description}</p>
                            <div className='footer_card'>
                                <p className='platform'>{game.platform}</p>
                                <p className='release_date'>{game.release_date}</p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GameList;
