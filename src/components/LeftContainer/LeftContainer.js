import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';

export default function LeftContainer({ username, orders, handleDeleteClick }) {
  const getTotal = () => {
    let tot = 0;

    orders.forEach((order) => {
      tot += order.price;
    });
    return tot;
  };
  return (
    <div
      style={{
        width: '50%',
        height: '100%',
      }}
    >
      <Typography variant="h5">
        {`What will it be for today, ${username}?`}
      </Typography>

      <div
        style={{
          marginTop: '15px',
          height: '90%',
        }}
      >
        <Card
          style={{
            height: '100%',
            position: 'relative',
          }}
        >
          <CardContent
            style={{
              height: '380px',
              overflow: 'scroll',
            }}
          >
            <Typography>{`You have ordered the following.`}</Typography>
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
              >{`Quantity`}</div>
              <div
                style={{
                  padding: '0px 10px',
                }}
              />
            </div>
            <Divider
              style={{
                marginTop: '5px',
                marginBottom: '5px',
              }}
            />

            {orders.length === 0 && (
              <div
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                No orders yet.
              </div>
            )}
            {orders.map((order) => {
              return (
                <React.Fragment key={order._id}>
                  <div
                    style={{
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ width: '30%', textAlign: 'center' }}>
                      {order.name}
                    </div>
                    <div style={{ width: '30%', textAlign: 'center' }}>
                      {order.price}
                    </div>
                    <div style={{ width: '30%', textAlign: 'center' }}>
                      {order.quantity}
                    </div>
                    <DeleteIcon onClick={handleDeleteClick(order._id)} />
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

            <div
              style={{
                fontSize: '20px',
                position: 'absolute',
                bottom: '0px',
                margin: '10px',
              }}
            >
              Total: {getTotal()} PHP
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
