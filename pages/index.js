// IMPORTS 
import React from "react";
import styled from "styled-components";
import config from "../config.json";
import {CSSReset} from "../src/components/CSSReset";
import { StyledFavorites } from "../src/components/Favorites";
import { StyledHeader } from "../src/components/Header";
import Menu from "../src/components/menu";
import { StyledTimeline } from "../src/components/Timeline";


function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    // const valorDoFiltro = "Angular"; 
    return (    
        <>
            <CSSReset />
            <div>
                {/* Prop Drilling */}
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
                <Header />
                <Timeline searchValue={valorDoFiltro} playlist={config.playlist} />
                <Favoritos favorites={config.favorites} />
            </div>
        </>
    )
}
  
export default HomePage

//HEADER BANNER
const StyledBanner = styled.div`
    background-color: blue;
    background-image: url(${({ bg }) => bg});
    /* background-image: url(${config.bg}); */
    height: 300px;
`;
function Header(){
    return(
        <StyledHeader>
            {/* Passando o banner como Prop nem sempre vai ter um config global */}
            <StyledBanner bg={config.bg} />
            <section className="user-info">
                <div className="image-info">
                    <img src={`https://github.com/${config.github}.png`} />  
                </div>
                <div className="texto-info">
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>  
                </div>
            </section>
        </StyledHeader>
    )

}

//TIMELINE
// props = propriedades, logo abaixo passando o valor variavel de search em  parametros e recuperando a variavel passando para dentro da function no lugar do "valorDoFiltro", MAS DEVE USAR COMO OBJETO
function Timeline({searchValue, ...props}){
    // console.log("Dentro do componente ",props);
    const playlistNames = Object.keys(props.playlist)
    return(
        <section>
            {/* <h2>{playlistNames}</h2> */}
                <StyledTimeline>
                    {playlistNames.map((playlistNames) => {
                        const videos = props.playlist[playlistNames];
                        // console.log(videos);
                        return (
                            <section key={playlistNames}>
                                <h2>{playlistNames}</h2>
                                <div>
                                    {videos
                                    .filter((video) => {
                                        const titleNormalized = video.title.toLowerCase();
                                        const searchValueNormalized = searchValue.toLowerCase();
                                        return titleNormalized.includes(searchValueNormalized);
                                    })
                                    .map((video) => {
                                        return(
                                            <a key={video.url} target="_blank" href={video.url}>
                                                <img src={video.thumb}/>
                                                <span>
                                                    {video.title}
                                                </span>
                                            </a>
                                        )
                                    })}
                                </div>
                            </section>
                        )
                    })}
                </StyledTimeline>
        </section>
    )
}

//FAVORITOS
function Favoritos(props){
    const playlistFavorites = Object.keys(props.favorites)
    return(
        <section>
            <StyledFavorites>
                {playlistFavorites.map((playlistFavorites) => {
                    const users = props.favorites[playlistFavorites];
                    // console.log(users);
                    return (
                        <section key={playlistFavorites}>
                            <h2>{playlistFavorites}</h2>
                            <div className="wrapper-favorites">
                                {users.map((user) => {
                                    return(
                                        <a key={user.perfil} target="_blank" href={user.perfil}>
                                            <img src={user.imagem}/>
                                            <p><b>{user.name}</b></p>
                                            <p>{user.job}</p>
                                        </a>
                                    )
                                })}
                            </div>
                        </section>
                    )
                })}
            </StyledFavorites>
        </section>
    )
}

