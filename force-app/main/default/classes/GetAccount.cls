public with sharing class GetAccount {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getAccount(String ContextId){
        return [
            SELECT Id,Name,Account.name
            FROM Contact 
            // WHERE axisltd_LoanApplicationId__c = :ContextId
            // WITH SYSTEM_MODE
        ];      
    }

}x