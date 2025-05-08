import { Drawer } from 'expo-router/drawer';
import React from 'react';

const DrawerLayout = () => {
  return (
    <Drawer>
        <Drawer.Screen
          name="user/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Usuario',
            title: 'Usuario',
          }}
        />
        <Drawer.Screen
          name="schedule/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Horarios',
            title: 'Horarios',
          }}
        />
      </Drawer>
  )
}

export default DrawerLayout