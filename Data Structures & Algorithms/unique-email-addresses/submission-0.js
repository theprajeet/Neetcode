class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        let uniqueEmails = new Set();
        for (let email of emails) {
            let [local, domain] = email.split('@');
            if (local.includes('+')) {
                local = local.substring(0, local.indexOf('+'));
            }
            local = local.replace(/\./g, '');
            let finalEmail = local + '@' + domain;
            uniqueEmails.add(finalEmail);
        }
        return uniqueEmails.size;
    }
}
