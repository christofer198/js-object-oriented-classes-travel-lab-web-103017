class Driver{
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(date){
    let endDate = new Date(date)
    return endDate.getFullYear() - this.startDate.getFullYear()
  }
}
