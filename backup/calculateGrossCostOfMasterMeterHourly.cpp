VECTOR<PAIR<PAIR<Timestamp *, Timestamp *>, FLOAT>> BillGeneration::calculateGrossCostOfMasterMeterHourly(UINT64 masterMeterID,Timestamp * pDateStart, Timestamp * pDateStop) {
    VECTOR<PAIR<PAIR<Timestamp *, Timestamp *>, FLOAT>>  res = VECTOR<PAIR<PAIR<Timestamp *, Timestamp *>, FLOAT>>();
    //get time in seconds and truncate minutes and seconds
    UINT64 i = (Timestamp::convertToUnixTime(pDateStart) / 3600) * 3600;
    UINT64 end = (Timestamp::convertToUnixTime(pDateStop) / 3600) * 3600;
    while(i < end ) {
        PAIR<PAIR<Timestamp *, Timestamp *>, FLOAT> row = PAIR<PAIR<Timestamp *, Timestamp *>, FLOAT>();
        row.first.first = Timestamp::unixTimeToTimestamp(i);
        row.first.second = Timestamp::unixTimeToTimestamp(i+3600);
        row.second = 10;
        res.push_back(row);
        i+=3600;
    }
    return res;
}