export const present = (param: any): boolean => {
  return param != null || param != undefined || param != {} || param != ""
}