const entrance_section = document.querySelector('#entrance-content');
const bank_section = document.querySelector('#bank-content');
const customer_section = document.querySelector('#customer-content');
const new_customer = document.querySelector('#new-customer');
const existing_customer = document.querySelector('#existing-customer');
const wrong_details = document.querySelector('.wrong-details');
const success_log = document.querySelector('.success-log');
const bank_balance = document.querySelector('.bank-balance');
const customers_list = document.querySelector('#customers-list');

// Show/Hide for Entrance Content Elements
if (document.body.contains(entrance_section)) {
    let bank_btn = document.querySelector('.bank-btn');
    let customer_btn = document.querySelector('.customer-btn');

    bank_btn.addEventListener('click', ()=> {
        entrance_section.style.display = 'none';
        bank_section.style.display = 'block'; 
    });

    customer_btn.addEventListener('click', ()=> {
        entrance_section.style.display = 'none';
        customer_section.style.display = 'block'; 
    });

}

// Show/Hide for Bank Content Elements
if (document.body.contains(bank_section)) {
    let bankBalanceBtn = document.querySelector('.btn-bank-balance');
    let bankCustomersBtn = document.querySelector('.btn-customers-list');

    bankBalanceBtn.addEventListener('click', ()=> {
        if (bank_balance.style.display !== 'block') {
            bank_balance.style.display = 'block'; 
        } else {
            bank_balance.style.display = 'none';   
        }
    });

    bankCustomersBtn.addEventListener('click', ()=> {
        if (customers_list.style.display !== 'block') {
            customers_list.style.display = 'block'; 
        } else {
            customers_list.style.display = 'none';   
        }
    });
}

// Show/Hide for New Customer Content Elements
if (document.body.contains(customer_section)) {
    let btnNewCustomer = document.querySelector('.btn-new-customer');
    let btnExistingCustomer = document.querySelector('.btn-exist-customer');

    btnNewCustomer.addEventListener('click', ()=> {
        if (new_customer.style.display !== 'block') {
            new_customer.style.display = 'block'; 
            existing_customer.style.display = 'none'; 
                // Create Customer Button with Show/Hide Element on 4-digit code
                let createCustomerBtn = document.querySelector('#create_newcustomer');
                    createCustomerBtn.addEventListener('click', ()=> { 
                        let newDetailsBtn = document.querySelector('.new-details');
                            newDetailsBtn.style.display = 'block'; 
                    });
        } else {
            new_customer.style.display = 'none';   
        }
    });

    btnExistingCustomer.addEventListener('click', ()=> {
        if (existing_customer.style.display !== 'block') {
            existing_customer.style.display = 'block'; 
            new_customer.style.display = 'none';
                // Customer Login to Show Information of Customer
                // IMPORTANT: still need to add if user inserted incorrect information then .wrong-details show up and if not so .customer-information show instead.
                let loginCustomerBtn = document.querySelector('#login');
                    loginCustomerBtn.addEventListener('click', ()=> { 
                        let welcomeCustomer = document.querySelector('.customer-welcome');
                        let actionsCustomer = document.querySelector('.customer-actions');
                        let transactionsCustomer = document.querySelector('.customer-transactions');
                        let customerArr = [welcomeCustomer, actionsCustomer, transactionsCustomer];
                            customerArr.forEach(element => {
                                element.style.cssText = 'display:flex;'; 
                            });  
                    });
        } else {
            existing_customer.style.display = 'none';   
        }
    });
}