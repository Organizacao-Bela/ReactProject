import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function ChartComponent() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  function groupByMonth(dates) {
    const grouped = {};

    dates.forEach((date) => {
      const yearMonth = date.toISOString().slice(0, 7);
      grouped[yearMonth] = (grouped[yearMonth] || 0) + 1;
    });

    return grouped;
  }
  useEffect(() => {
    async function fetchDataAndRenderChart() {
      try {
        const response = await fetch(
          "https://api.github.com/users/LuccaCasalecchi/repos"
        );
        const repos = await response.json();

        const creationDates = repos.map((repo) => new Date(repo.created_at));

        const groupedData = groupByMonth(creationDates);

        renderChart(groupedData);
      } catch (error) {
        console.error("Erro ao buscar os dados da API:", error);
      }
    }

    function renderChart(data) {
      const labels = Object.keys(data);
      const values = Object.values(data);

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(chartRef.current, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Repositórios Criados",
              data: values,
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 2,
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: "Mês",
              },
            },
            y: {
              title: {
                display: true,
                text: "Repositórios",
              },
            },
          },
        },
      });
    }

    fetchDataAndRenderChart();
  }, []);

  return (
    <div>
      <canvas id="myChart" ref={chartRef}></canvas>
    </div>
  );
}
