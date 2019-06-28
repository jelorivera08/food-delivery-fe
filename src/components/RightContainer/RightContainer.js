import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import AddCircle from '@material-ui/icons/AddCircle';

export default function RightContainer({ menu, handleAddClick }) {
  return (
    <div
      style={{
        width: '50%',
        marginTop: '30px',
        height: '100%',
      }}
    >
      <div
        style={{
          marginTop: '15px',
          height: '90%',
        }}
      >
        <Card
          style={{
            height: '100%',
            margin: '0px 10px',
            position: 'relative',
          }}
        >
          <CardContent
            style={{
              height: '380px',
              overflow: 'scroll',
            }}
          >
            <Typography>{`Here is the menu for today. 🍔`}</Typography>
            <div
              style={{
                margin: '20px 0px',
              }}
            />

            <div
              style={{
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ width: '30%', textAlign: 'center' }}>{`Food`}</div>
              <div style={{ width: '30%', textAlign: 'center' }}>{`Price`}</div>
              <div
                style={{ width: '30%', textAlign: 'center' }}
              >{`Add one`}</div>
            </div>
            <Divider
              style={{
                marginTop: '5px',
                marginBottom: '5px',
              }}
            />

            {menu.map((menuItem) => {
              return (
                <React.Fragment key={menuItem._id}>
                  <div
                    style={{
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div
                      style={{
                        width: '30%',
                        textAlign: 'center',
                      }}
                    >
                      {menuItem.name}
                    </div>
                    <div style={{ width: '30%', textAlign: 'center' }}>
                      {menuItem.price}
                    </div>
                    <div
                      style={{
                        width: '30%',
                        textAlign: 'center',
                        cursor: 'pointer',
                      }}
                      onClick={handleAddClick(menuItem.name, menuItem.price)}
                    >
                      <AddCircle color="secondary" />
                    </div>
                  </div>
                  <Divider
                    style={{
                      marginTop: '5px',
                      marginBottom: '5px',
                    }}
                  />
                </React.Fragment>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
