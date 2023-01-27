import { AccountModel, AccountTypeModel, CustomerModel } from "../../models";
import { v4 as uuid } from 'uuid';
import { AccountTypeEntity } from './account-type.entity';

export class AccountEntity implements AccountModel{
    
    protected _id = uuid();
    public get id() {
        return this._id;
    }
    public set id(value) {
        this._id = value;
    }

    protected _customer_id: CustomerModel;
    public get customer_id(): CustomerModel {
        return this._customer_id;
    }
    public set customer_id(value: CustomerModel) {
        this._customer_id = value;
    }

    protected _account_type_id: AccountTypeEntity;
    public get account_type_id(): AccountTypeEntity {
        return this._account_type_id;
    }
    public set account_type_id(value: AccountTypeEntity) {
        this._account_type_id = value;
    }

    protected _balance: number;
    public get balance(): number {
        return this._balance;
    }
    public set balance(value: number) {
        this._balance = value;
    }

    protected _state: boolean;
    public get state(): boolean {
        return this._state;
    }
    public set state(value: boolean) {
        this._state = value;
    }

    protected _deleted_at: number | Date;
    public get deleted_at(): number | Date {
        return this._deleted_at;
    }
    public set deleted_at(value: number | Date) {
        this._deleted_at = value;
    }

}