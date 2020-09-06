export const eitherSucceeded =(promiseResult, successCallback, failureCallback) => {
  if(promiseResult.status !== 'fulfilled' || promiseResult.value.success === false){
    return failureCallback()
  }else {
    return successCallback()
  }
}