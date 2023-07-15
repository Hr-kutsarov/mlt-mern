import { ResponsivePieCanvas } from '@nivo/pie'


export function PieChart({dataPie}) {

    return (
        <ResponsivePieCanvas
        data={dataPie}
        margin={{ top: 40, right: 200, bottom: 40, left: 90 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'paired' }}
        arcLinkLabelsSkipAngle={3}
        arcLinkLabelsTextColor="#555"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor="#fff"
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 140,
                translateY: 0,
                itemsSpacing: 4,
                itemWidth: 60,
                itemHeight: 14,
                itemTextColor: '#000',
                itemDirection: 'left-to-right',
                itemOpacity: 0.7,
                symbolSize: 14,
                symbolShape: 'circle'
            }
        ]}
    />
    )
}


