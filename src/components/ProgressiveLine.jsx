import { ResponsiveLine } from '@nivo/line'


const data = [
    {
      id: "japan",
      color: "#1154FE",
      data: [
        {
          x: "plane",
          y: 224,
        },
        {
          x: "helicopter",
          y: 11,
        },
        {
          x: "boat",
          y: 245,
        },
        {
          x: "train",
          y: 38,
        },
        {
          x: "subway",
          y: 56,
        },
        {
          x: "bus",
          y: 237,
        },
        {
          x: "car",
          y: 42,
        },
        {
          x: "moto",
          y: 203,
        },
        {
          x: "bicycle",
          y: 207,
        },
        {
          x: "horse",
          y: 81,
        },
        {
          x: "skateboard",
          y: 21,
        },
        {
          x: "others",
          y: 54,
        },
      ],
    },

  ];

const Electro = () => {
  
  
  return(
    <>
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'primary' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: '#1154FE',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: '#1154FE',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        />
        </>
  ) 
};

export default Electro;
