import React, {useState, useEffect} from 'react';

function DevForm({onSubmit}){

    // Armazena variaveis no estado  
    const [latitude, setLatitude] = useState(''); 
    const [longitude, setLongitude] = useState(''); 
    const [github_username, setGithubUsername] = useState(''); 
    const [techs, setTechs] = useState(''); 

    
    // pega posição GPS usando o useEffect para controlar quando ela deve rodar novamente 
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude} = position.coords;

            setLatitude(latitude);
            setLongitude(longitude);
        },
        (err) => {
            console.log(err);
        },
        {
            timeout: 3000 
        }
        );
    },[]);

    async function handleSubmit(e){
        e.preventDefault();

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
          });

        // limpa campos
        setGithubUsername ('') ; 
        setTechs('');
          

    }


    return (

        
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
            name="github_username" 
            id="github_username" 
            value={github_username} 
            onChange={e => setGithubUsername(e.target.value)}
            required/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Técnologias(separadas por vírgula)</label>
            <input 
            name="techs" 
            id="techs" 
            value={techs} 
            onChange={e => setTechs(e.target.value)}
            required/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
              type="text" 
              name="latitude" 
              id="latitude" 
              value={latitude} 
              onChange={e => setLatitude(e.target.value)}
              required
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
              type="text" 
              name="longitude" 
              id="longitude" 
              value={longitude} 
              onChange={e => setLongitude(e.target.value)}
              required/>
            </div>
          </div>

          <button type="submit">Salvar</button>

        </form>
    );
}

export default DevForm;