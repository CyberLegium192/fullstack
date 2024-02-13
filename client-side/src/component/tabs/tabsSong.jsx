import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {getSongs, getSongsBySetlist } from '../../../libs/songs.js'
import { useState, useEffect } from "react";
import CardHorizontalSong from "../../component/card-member/card-song-search";
import CardSetlist from "../../component/card-member/card-setlist-search";

const tabsSong = ({songs, albums}) => {
  
    return (
        <Tabs className='pb-32'>
          <TabList className='flex justify-evenly mb-12'>
            <Tab  className='font-poppins text-base font-medium'>Lagu <sub className='text-blue-600'>{songs.length}</sub></Tab>
            <Tab className='font-poppins text-base font-medium'>Lainnya <sub className='text-blue-600'>{albums.length}</sub></Tab>
          </TabList>
      
          <TabPanel className='w-full '>
            {songs.map(item => <CardHorizontalSong key={item.id} item={item}/>)}
            
          </TabPanel>
          <TabPanel>
            <div className='grid grid-cols-2 gap-x-6 gap-y-6'>
              {albums.map(item => <CardSetlist key={item.id} item={item}/>)}
            </div>
          </TabPanel>
        </Tabs>
    );
};

export default tabsSong;




