Vue.component('select-fields',
{
  template: '#select-fields',
  data() {
    return {
      startTime: '08:15',
      endTime: '09:00',
      times: [
        { label: '8:00 am', val: '08:00' },
        { label: '8:15 am', val: '08:15' },
        { label: '8:30 am', val: '08:30' },
        { label: '8:45 am', val: '08:45' },
        { label: '9:00 am', val: '09:00' },
        { label: '9:15 am', val: '09:15' },
        { label: '9:30 am', val: '09:30' },
        { label: '9:45 am', val: '09:45' },
        { label: '10:00 am', val: '10:00' },
        { label: '10:15 am', val: '10:15' },
        { label: '10:30 am', val: '10:30' },
        { label: '10:45 am', val: '10:45' },
        { label: '11:00 am', val: '11:00' },
        { label: '11:15 am', val: '11:15' },
        { label: '11:30 am', val: '11:30' },
        { label: '11:45 am', val: '11:45' },
        { label: '12:00 pm', val: '12:00' },
        { label: '12:15 pm', val: '12:15' },
        { label: '12:30 pm', val: '12:30' },
        { label: '12:45 pm', val: '12:45' },
        { label: '1:00 pm', val: '13:00' },
        { label: '1:15 pm', val: '13:15' },
        { label: '1:30 pm', val: '13:30' },
        { label: '1:45 pm', val: '13:45' },
        { label: '2:00 pm', val: '14:00' },
        { label: '2:15 pm', val: '14:15' },
        { label: '2:30 pm', val: '14:30' },
        { label: '2:45 pm', val: '14:45' },
        { label: '3:00 pm', val: '15:00' },
        { label: '3:15 pm', val: '15:15' },
        { label: '3:30 pm', val: '15:30' },
        { label: '3:45 pm', val: '15:45' },
        { label: '4:00 pm', val: '16:00' },
        { label: '4:15 pm', val: '16:15' },
        { label: '4:30 pm', val: '16:30' },
        { label: '4:45 pm', val: '16:45' },
        { label: '5:00 pm', val: '17:00' },
        { label: '5:15 pm', val: '17:15' },
        { label: '5:30 pm', val: '17:30' },
        { label: '5:45 pm', val: '17:45' },
        { label: '6:00 pm', val: '18:00' },
      ]
    }
  },
  methods: {
    getToday() {
      let today = new Date()
      return `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
    }
  },
  created() {

  },
  computed: {
    startTimeParsed: function() {
      return Date.parse(`${this.getToday()} ${this.startTime}`)
    },
    endTimeParsed: function() {
      return Date.parse(`${this.getToday()} ${this.endTime}`)
    },
    totalTime: function() {
      return (this.endTimeParsed - this.startTimeParsed) / 1000 / 60 / 60
    },
    properHours: function() {
      if (this.totalTime > 0 && this.totalTime <= 1)
        return 'hr'
      else if (this.totalTime > 1)
        return 'hrs'
      else
        return ''
    },
  },
  watch: {
    startTime: function() {
      if (this.startTimeParsed > this.endTimeParsed)
        this.endTime = this.startTime
    },
    endTime: function() {
      if (this.startTimeParsed > this.endTimeParsed)
        this.endTime = this.startTime
    }
  }
})