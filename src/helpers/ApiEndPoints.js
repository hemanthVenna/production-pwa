// const apiHostUrl = 'https://microsoftmrrapi.azurewebsites.net/api/';
const apiHostUrl = 'https://popcornappsservices.azurewebsites.net/api/';
const newApiHostUrl = 'https://mrrdevapi.azurewebsites.net/Service/';
const apiEndPoints = {
  SaveSession: `${apiHostUrl}SaveSession`,
  SendNotification: `${apiHostUrl}SendNotification`,
  createPass: `${apiHostUrl}SavePass`,
  DevicesBySessionId: `${newApiHostUrl}DevicesBySessionId`,
  SendRawNotification: `${newApiHostUrl}SendRawNotification`,
  CreateiosPass: `${newApiHostUrl}IOSPass`,
};
export default apiEndPoints;