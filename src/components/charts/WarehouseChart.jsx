import React from "react";

const WarehouseChart = () => {
  const chartRef = React.useRef(null);
  const chartInstance = React.useRef(null);

  React.useEffect(() => {
    // Dynamically load Chart.js script
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/chart.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      const ctx = chartRef.current.getContext("2d");
      const warehouseData = [
        { hub: "YYZ (Toronto)", size: 20000 },
        { hub: "YVR (Vancouver)", size: 10000 },
        { hub: "YUL (Montreal)", size: 7000 },
        { hub: "Brantford", size: 5000 },
        { hub: "YYC (Calgary)", size: 4000 },
        { hub: "YOW (Ottawa)", size: 4000 },
        { hub: "YEG (Edmonton)", size: 3500 },
        { hub: "YWG (Winnipeg)", size: 3000 },
        { hub: "Windsor", size: 3000 },
        { hub: "London", size: 3000 },
      ];

      chartInstance.current = new window.Chart(ctx, {
        type: "bar",
        data: {
          labels: warehouseData.map((d) => d.hub),
          datasets: [
            {
              label: "Warehouse Capacity (sq ft)",
              data: warehouseData.map((d) => d.size),
              backgroundColor: "#0a9396",
              borderColor: "#005f73",
              borderWidth: 1,
              borderRadius: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: {
              beginAtZero: true,
              ticks: { callback: (value) => value / 1000 + "k sq ft" },
            },
            x: { grid: { display: false } },
          },
        },
      });
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default WarehouseChart;
