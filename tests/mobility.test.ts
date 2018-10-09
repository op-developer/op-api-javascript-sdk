import { Client } from '../';

const headers = {
    'x-authorization': 'b6910384440ce06f495976f96a162e2ab1bafbb4',
    'x-api-key': process.env.X_API_KEY
};
const client = new Client({ headers });

describe('Mobility', () => {
    it('Should get all branches', done => {
        client.getBranches().then(branches => {
            const branchesArray = branches['payload'];
            expect(branchesArray).toBeDefined();
            expect(branchesArray[0]).toHaveProperty('name');
            expect(branchesArray[0]).toHaveProperty('location');
            done();
        });
    });
    it('Should get all branches with search term Karjala', done => {
        client.getBranches('', '', 'Karjala').then(branches => {
            const branchesArray = branches['payload'];
            expect(branchesArray[0]['name']['fi']).toEqual(
                expect.stringContaining('KARJALA')
            );
            done();
        });
    });
    it('Should get all branches near coordinates 24.750,60.733 (Riihimäki)', done => {
        client.getBranches('', '24.750,60.733').then(branches => {
            const branchesArray = branches['payload'];
            expect(branchesArray[0]['town']['fi']).toEqual('RIIHIMÄKI');
            done();
        });
    });
    it('Should get all branches as json', done => {
        client.getBranchesAsJson().then(branches => {
            const branchesArray = branches['payload'];
            expect(branchesArray).toBeDefined();
            expect(branchesArray[0]).toHaveProperty('name');
            expect(branchesArray[0]).toHaveProperty('location');
            done();
        });
    });
    it('Should get all branches as geoJson', done => {
        client.getBranchesAsGeoJson().then(branches => {
            expect(branches).toHaveProperty('features');
            expect(Array.isArray(branches['features'])).toEqual(true);
            expect(branches['features'][0]).toHaveProperty('geometry');
            expect(branches['features'][0]['geometry']).toHaveProperty(
                'coordinates'
            );
            expect(branches['features'][0]).toHaveProperty('properties');
            expect(branches['features'][0]['properties']).toHaveProperty(
                'branchType'
            );
            expect(branches['features'][0]['properties']).toHaveProperty(
                'name'
            );
            expect(branches['features'][0]).toHaveProperty('type');
            done();
        });
    });
});
