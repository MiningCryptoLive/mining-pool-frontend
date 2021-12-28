/* jshint node: true */

module.exports = function (environment) {
    var ENV = {
        modulePrefix: 'open-etc-pool',
        environment: environment,
        rootURL: '/',
        locationType: 'hash',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

             APP: {
                     // API host and port
                    ApiUrl: '//etc.miningcrypto.live/',

                    // HTTP mining endpoint
                    HttpHost: 'http://etc.miningcrypto.live',
                    HttpPort: 8888,

                    // Stratum mining endpoint
                    StratumHost: 'etc.miningcrypto.live',
                    StratumPort: 8008,
               
                    // The ETC network used (classic, mordor)
                    Network: 'classic',

                    // Fee and payout details
                    PoolFee: '1.0%',
                    PayoutThreshold: '0.5',
                    ShareDifficulty: '3G',

                    //Current and Localization
                    Currency: 'USD',
                    CoinName: 'Ethereum Classic',
                    CoinShortName: 'ETC',
                    PaymentText: 'every 2 hours',
                    SupportMail: 'celldr69@gmail.com',
                  //  SupportHelpdesk: 'http://helpdesk.daggerpool.com',
                    WebsiteName: 'miningcrypto.live',

                    //Coin Bases Settings
                    ChainAddress : 'https://blockscout.com/etc/mainnet/',
                    TransactionAddress : 'https://blockscout.com/etc/mainnet/txs/',
                    UncleAddress : 'https://blockscout.com/etc/mainnet/uncles/',
                    BlockAddress : 'https://blockscout.com/etc/mainnet/blocks/',

                    //Twitter Parameter
                 //   TwitterURL: 'https://twitter.com/',
                  //  TwitterHash: 'daggerpool_com',


                    // For network hashrate (change for your favourite fork)
                    BlockTime: 13.2
             }
    };

    if (environment === 'development') {
        /* Override ApiUrl just for development, while you are customizing
         frontend markup and css theme on your workstation.
         */
        ENV.APP.EXP.ApiUrl = 'https://exp.daggerpool.com/'
        ENV.APP.UBIQ.ApiUrl = 'https://ubiq.daggerpool.com/'
        ENV.APP.DBIX.ApiUrl = 'https://dbix.daggerpool.com/'
        ENV.APP.MUSIC.ApiUrl = 'https://music.daggerpool.com/'
        ENV.APP.ETH.ApiUrl = 'https://eth.daggerpool.com/'
        ENV.APP.ETC.ApiUrl = 'https://etc.daggerpool.com/'
        ENV.APP.SOIL.ApiUrl = 'https://soil.daggerpool.com/'
        ENV.APP.ELE.ApiUrl = 'https://ele.daggerpool.com/'
        ENV.APP.PIRL.ApiUrl = 'https://pirl.daggerpool.com/'
        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {
        ENV.baseURL = '/ember-cli-twitter-feed/';
    }

    ENV.contentSecurityPolicy = {
        'script-src': [
            "'self'",
            'https://syndication.twitter.com',
			            'https://cdn.syndication.twimg.com',
            "'sha256-XnNQECY9o-nIv2Qgcd1A39YarwxTm10rhdzegH_JBxY='"],
        'style-src': [
            "'self'",
            'http://platform.twitter.com',
            "'sha256-zCvYlDs6LsUp0EqrJFjIGUiM_AG2fGlkNrzJ2YiBTG0='"],
        'img-src': [
            "'self'",
            'data:',
            'https://pbs.twimg.com',
            'https://syndication.twitter.com',
            'http://platform.twitter.com']
    };
    return ENV;
};
