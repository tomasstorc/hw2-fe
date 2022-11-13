import { PieChart, Pie, Cell, Legend } from "recharts";
type ChartProps = {
  goods: number;
  toys: number;
  parfume: number;
  electro: number;
};

function Chart({ goods, toys, parfume, electro }: ChartProps) {
  let unoccupied = 120 - (goods + toys + parfume + electro);

  const data = [
    { name: "Domácí potřeby", value: goods },
    { name: "Hračky", value: toys },
    { name: "Parfémy", value: parfume },
    { name: "Elektronika", value: electro },
    { name: "Neobsazeno", value: unoccupied },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#EAEAEA"];

  return (
    <PieChart width={600} height={200}>
      <Pie data={data} dataKey="value">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  );
}

export default Chart;
