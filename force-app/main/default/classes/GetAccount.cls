public class GetAccount {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(String ContextId){
        return [
            SELECT Id,Name
            FROM Account 
            // WHERE axisltd_LoanApplicationId__c = :ContextId
            WITH SYSTEM_MODE
        ];      
    }

}