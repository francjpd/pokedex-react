'use strict';

const router = jest.createMockFromModule('react-router-dom');
function useLocation() {
    return { pathname: '/' };
}
router.useLocation = useLocation;

module.exports = router;