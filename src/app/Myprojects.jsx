"use client"

import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import Image from 'next/image';

function Myprojects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('myprojects')
        .select('*');

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setData(data);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div className="myProjects">
      <h1>Projelerim</h1>
      <div className="projects">
        {data.map(item => (
          <div className="project" key={item.id}>
            <a href={item.project_url} target="_blank" title={item.project_name+".com"}>
                        <Image src='/ateste_pisenler.png' alt={item.project_name+".com"} 
                        width={50} height={50}/>
                    </a>
                    <h6>{item.project_name}</h6>
            </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Myprojects;
