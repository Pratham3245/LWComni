public with sharing class GetcurrentUserDetail {
    @AuraEnabled(cacheable=true)
    public static User getRecordOwner(Id recordId) {
        return [SELECT  Name FROM User WHERE Id = :recordId WITH SYSTEM_MODE];
    }
}
