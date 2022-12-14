import { useEffect, useState } from "react"

import { GiPositionMarker } from 'react-icons/gi';
import { MdBusinessCenter } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';

export default function Curriculo(){
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/timedev-net')
        .then(response => response.json() )
        .then(data => setData(data))
    },[])
    return(
        <div style={{width: '100% ', display: 'flex', justifyContent: 'space-between'}}>
            <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column',  gap: '30px'}}>
                <div style={{
                    width: '20%', height: '20%', background: '#FAF8F8', boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)', 
                    borderRadius: '20px', marginLeft: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <img src={data.avatar_url} style={{width: '40%', borderRadius: '50px', marginTop: '32px', marginBottom: '32px'}}/>
                    <p style={{color: '#837E9F', fontWeight: '700', marginBottom: '4px', fontSize: '23px'}}>{data.name}</p>
                    <p style={{color: '#837E9F', fontSize: '12px', fontWeight: '300'}}>{data.company}</p>
                </div>
                <div style={{
                    width: '20%', background: '#FAF8F8', boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)', 
                    borderRadius: '20px', marginLeft: '40px', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                    <p style={{marginLeft: '40px', marginTop: '10px'}}><GiPositionMarker style={{color: '#837E9F'}}/> {data.location}</p>   
                    <p style={{marginLeft: '40px'}}><MdBusinessCenter style={{color: '#837E9F'}}/> {data.company}</p>   
                    <p style={{marginLeft: '40px'}}> <AiFillGithub style={{color: '#837E9F'}}/> {data.login}</p>   

                </div>
                <div style={{
                    width: '20%', background: '#FAF8F8', boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)', 
                    borderRadius: '20px', marginLeft: '40px', display: 'flex', flexDirection: 'column'}}>
                    <p style={{marginLeft: '20px', marginTop: '10px', color: '#837E9F', fontWeight: '700'}}>Tecnologias</p>
                    <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                        <div style={{padding: '4px', maxWidth: '80%', background: '#64AE63', borderRadius: '20px', display: 'flex', justifyContent: 'center', marginLeft: '40px', marginBottom:'30px'}}>JavaScript</div>
                        <div style={{padding: '4px',maxWidth: '80%', height: '4%', background: '#64AE63', borderRadius: '20px', display: 'flex', justifyContent: 'center', marginLeft: '10px', marginBottom:'30px'}}>HTML5</div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                        <div style={{padding: '4px', maxWidth: '80%', background: '#64AE63', borderRadius: '20px', display: 'flex', justifyContent: 'center', marginLeft: '40px', marginBottom:'30px'}}>CSS3</div>
                        <div style={{padding: '4px',maxWidth: '80%', height: '4%', background: '#64AE63', borderRadius: '20px', display: 'flex', justifyContent: 'center', marginLeft: '10px', marginBottom:'30px'}}>NodeJS</div>
                        <div style={{padding: '4px',maxWidth: '80%', height: '4%', background: '#64AE63', borderRadius: '20px', display: 'flex', justifyContent: 'center', marginLeft: '10px', marginBottom:'30px'}}>SQL</div>
                    </div>
                </div>
            </div>
            <div>
            <div style={{
                    height: '10%', background: '#FAF8F8', boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)', 
                    borderRadius: '20px', marginLeft: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '15px'}}>
                    <p>aaaaaaaaa</p>
                </div>
            </div>
        </div>
    )
}