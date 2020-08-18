<template>
  <div class="q-pa-none">
    <q-table
      color="black"
      card-class="bg-secondary text-black"
      table-class="text-black"
      table-header-class="text-black"
      flat
      bordered
      title="Previous Projects Handled. "
      :data="data"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Name of Client',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'membership', align: 'left', label: 'Project', field: 'membership'},
        { name: 'location', align: 'left', label: 'Period', field: 'location'},
        { name: 'valuechain', align: 'left', label: 'Status', field: 'valuechain' }
      ],

      data: [
        {
          name: 'NNPC/FES',
          membership: 'Consultancy services for Compensation Valuation for Land Acquisition',
          location: 'May 2019',
          valuechain: 'Successfully Completed',
        },
        {
          name: 'NIPOST',
          membership: 'Consultancy services for Valuation of NIPOST Assets Nationwide',
          location: 'February, 2019',
          valuechain: 'Successfully Completed',
        },
        {
          name: 'NNPC',
          membership: 'Consultancy services for Land Acquisition AKK Gas Pipeline',
          location: 'Dcember, 2018',
          valuechain: 'On-going',
        },
        {
          name: 'Kaduna State Government',
          membership: 'Valuation of Residential Landed Properties',
          location: 'November, 2017',
          valuechain: 'Successfully Completed',
        },
        {
          name: 'NNPC.',
          membership: 'Valuation of NNPC Plant and Machinery',
          location: 'June, 2017',
          valuechain: 'Successfully Completed',
        },
        {
          name: 'AMCON',
          membership: 'Valuation of Assets of OBAT Oil & Petroleum Ltd',
          location: 'November, 2016',
          valuechain: 'Successfully Completed',
        },
        {
          name: 'BPE',
          membership: 'Valuation of PHCN Non-core assets nationwide',
          location: 'February, 2016',
          valuechain: 'Successfully Completed',
        },
        {
          name: 'AMCON_',
          membership: 'Valuation of NITEL/MTEL Equipment and Installation, Nationwide',
          location: 'January, 2014',
          valuechain: 'Successfully Completed',
        },
        {
          name: 'Ministry of Works',
          membership: 'Compensation Valuation for Zungeru Hydroelectric Power Project',
          location: 'June, 2013',
          valuechain: 'On-going',
        },  
        {
          name: 'AMCON._',
          membership: 'Coordination of Estate Firm in Northern Zone',
          location: 'October, 2011',
          valuechain: 'Successfully Completed',
        },
        {
          name: 'Savannah Bank Plc',
          membership: 'Asset Valuation of Savannah Bank nationwide',
          location: 'November, 2011',
          valuechain: 'Successfully Completed',
        }, 
        {
          name: 'NNPC_',
          membership: 'Insurance Valuation of NNPC Towers, Abuja',
          location: 'July, 2011',
          valuechain: 'Successfully Completed',
        },  
        {
          name: 'Peugeot Automible ltd',
          membership: 'Complete Asset Valuation of PAN nationwide',
          location: 'February, 2011',
          valuechain: 'Successfully Completed',
        },  
        {
          name: 'Unity Bank Plc',
          membership: 'Complete Asset Valuation of the Bank',
          location: 'December, 2010',
          valuechain: 'Successfully Completed',
        },  
        {
          name: 'Peak Alluminium NG',
          membership: 'Complete Asset Valuation',
          location: 'May, 2010',
          valuechain: 'Successfully Completed',
        }, 
        {
          name: 'Federal Government NG',
          membership: 'Compensation Valuation for Highway Dualization, PortHacourt',
          location: 'May, 2007',
          valuechain: 'Successfully Completed',
        },
        {
          name: 'Federal Government NG._',
          membership: 'Compensation Valuation for PHCN in Bayelsa State',
          location: 'February, 2006',
          valuechain: 'Successfully Completed',
        },
        {
          name: 'BOA former NACRDB',
          membership: 'Sale of Bank Residential Properties',
          location: 'June, 2008',
          valuechain: 'Successfully Completed',
        }, 
        {
          name: 'PIC/FGN',
          membership: 'Valuation of Properties in Kano, Jigawa & Kaduna States.',
          location: 'May, 2008',
          valuechain: 'Successfully Completed',
        },
        {
          name: 'Peugeot Automobile NG',
          membership: 'Complete Asset Valuation',
          location: 'March, 2008',
          valuechain: 'Successfully Completed',
        },                                                                                                            
      ]
    }
  }
}
</script>

<style scoped>

</style>