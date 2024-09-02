using {
  AirCall
} from '../db/schema';
service Aircallservice @(path: '/Aircallservice') {
    entity CallEvent as projection on AirCall.CallEvent;
}