import React from 'react';
import * as mui from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export const Projects = () => {
  const projects = [{ name: 'BF EFECT!' }, { name: 'BF EFECT!' }, { name: 'BF EFECT!' }, { name: 'BF EFECT!' }];
  return (
    <div>
      <h1> Projects </h1>
      {projects.map((item, index) => (
        <mui.Card key={index}>
          <mui.CardHeader
            title={item.name}
            subheader='September 14, 2016'
            action={
              <mui.IconButton aria-label='settings' size='small'>
                <MoreVertIcon />
              </mui.IconButton>
            }
          />
          <mui.CardContent>
            <p>
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </p>
          </mui.CardContent>
        </mui.Card>
      ))}
    </div>
  );
};
