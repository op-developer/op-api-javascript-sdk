import * as chai from 'chai';
import 'mocha';

import { Client } from '../';

const headers = {
    'x-request-id': 'x-request-id',
    'x-session-id': 'x-session-id',
    'x-authorization': 'b6910384440ce06f495976f96a162e2ab1bafbb4',
    'x-api-key': process.env.X_API_KEY
};
const client = new Client({ headers });

describe('Mobility', () => {
    it('Should get all branches', done => {
        client.getBranches().then(branches => {
            const branchesArray = branches.data['payload'];
            chai.expect(branchesArray).to.exist;
            chai.expect(branchesArray[0]).to.have.property('_id');
            chai.expect(branchesArray[0]).to.have.property('name');
            chai.expect(branchesArray[0]).to.have.property('location');
            done();
        });
    });
    it('Should get all branches with search term Helsinki', done => {
        client.getBranches('', '', 'Karjala').then(branches => {
            const branchesArray = branches.data['payload'];
            chai.expect(branchesArray[0]['name']).to.include('KARJALA');
            done();
        });
    });
    it('Should get all branches near coordinates 24.750,60.733 (Riihimäki)', done => {
        client.getBranches('', '24.750,60.733').then(branches => {
            const branchesArray = branches.data['payload'];
            chai.expect(branchesArray[0]['town']).to.equal('RIIHIMÄKI');
            done();
        });
    });
    it('Should get all branches as json', done => {
        client.getBranchesAsJson().then(branches => {
            const branchesArray = branches.data['payload'];
            chai.expect(branchesArray).to.exist;
            chai.expect(branchesArray[0]).to.have.property('_id');
            chai.expect(branchesArray[0]).to.have.property('name');
            chai.expect(branchesArray[0]).to.have.property('location');
            done();
        });
    });
    it('Should get all branches as geoJson', done => {
        client.getBranchesAsGeoJson().then(branches => {
            chai.expect(branches.data).to.have.property('features');
            chai.expect(branches.data['features']).to.be.an('array');
            chai
                .expect(branches.data['features'][0])
                .to.have.property('geometry')
                .with.property('coordinates');
            chai
                .expect(branches.data['features'][0])
                .to.have.property('properties')
                .with.property('_id');
            chai.expect(branches.data['features'][0]).to.have.property('type');
            done();
        });
    });
});
