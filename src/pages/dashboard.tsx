import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar";
import dynamic from "next/dynamic";
import { theme } from "../styles/theme";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-06-18T00:00:00.000Z',
      '2021-06-19T00:00:00.000Z',
      '2021-06-20T00:00:00.000Z',
      '2021-06-21T00:00:00.000Z',
      '2021-06-22T00:00:00.000Z',
      '2021-06-23T00:00:00.000Z',
      '2021-06-24T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
}

const series = [
  {
    name: 'series1',
    data: [
      31, 12, 120, 158, 45, 123, 105
    ]
  }
]

export default function Dashboard() {
  return (
    <Flex direction='column' h='100vh'>
      <Header />
      <Flex
        w='100%'
        my='6'
        maxWidth={1480}
        mx='auto'
        px='6'>

        <SideBar />

        <SimpleGrid
          flex='1'
          gap='4'
          minChildWidth='320px'
          align='flex-start'>
          <Box
            p='8'
            bg='gray.800'
            borderRadius={8}
            pb='4'
          >
            <Text fontSize='lg' mb='4'>Week Subscriptions</Text>
            <Chart type='area' options={options} series={series} height={160} />
          </Box>
          <Box
            p='8'
            bg='gray.800'
            borderRadius={8}
            pb='4'
          >
            <Text fontSize='lg' mb='4'>Subscriptions Rate</Text>
            <Chart type='area' options={options} series={series} height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}