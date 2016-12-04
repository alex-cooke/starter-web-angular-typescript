import { ILogger } from './logger';
import * as angular from 'angular';
import 'angular-mocks';

describe("logger service", () => {

    var Logger: ILogger;

    beforeEach(() => {
        angular.mock.module('app');
        angular.mock.inject((_Logger_) => {

            Logger = _Logger_;

        });
    });

    it('should work', () => {

        Logger.log("test");

        expect(Logger.messages.length).toBe(1);

        Logger.log("test2");

        expect(Logger.messages.length).toBe(2);

    });

    it('should work again', () => {

        Logger.log("test");

        expect(Logger.messages.length).toBe(1);

        Logger.log("test2");

        expect(Logger.messages.length).toBe(2);

    });

});
