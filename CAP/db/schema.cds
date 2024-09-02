using {
    managed
} from '@sap/cds/common';

context AirCall {
    entity CallEvent : managed {
      key   UUID        : UUID @Core.Computed;
         resource : String;
         event: String;
         timestamp: Timestamp;
         token: String;
        callid: Int64;
        direct_link: String;
        started_at: Timestamp;
        answered_at: Timestamp;
        ended_at: Timestamp;
        duration: Integer;
        status: String;
        direction: String;
        number: String;
        name: String; 
  };
}
