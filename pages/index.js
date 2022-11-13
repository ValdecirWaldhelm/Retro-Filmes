// IMPORTS 
import config from "../config.json";
import styled from "styled-components";
import {CSSReset} from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";


function HomePage() {
    return (
        <>
            <CSSReset />
            <div>
                <Menu />
                <Header />
                <Timeline playlist={config.playlist}>
                    Conteudo
                </Timeline>
            </div>
        </>
    )
}
  
export default HomePage

//MENU
// function Menu(){
//     return(
//         <div>
//             Menu
//         </div>
//     )

// }

//HEADER STYLED
const StyledHeader = styled.div`
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        padding: 0 30px;
        margin-top: 80px;
        display: flex;
        align-items: center;
    }
    .image-info{
        margin-right: 20px;
    }
`;
//HEADER
function Header(){
    return(
        <StyledHeader>
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
// props = propriedades
function Timeline(props){
    // console.log("Dentro do componente ",props);
    const playlistNames = Object.keys(props.playlist)
    return(
        <section>
            {/* <h2>{playlistNames}</h2> */}
                <StyledTimeline>
                    {playlistNames.map((playlistNames) => {
                        const videos = props.playlist[playlistNames];
                        return (
                            <section>
                                <h2>{playlistNames}</h2>
                                <div>
                                    {videos.map((video) => {
                                        return(
                                            <a href={video.url}>
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
