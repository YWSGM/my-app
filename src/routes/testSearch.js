import { connect } from 'dva';
import { useEffect } from 'react';

function SearchTest(props) {
    useEffect(() => {
        window.console.log('哈哈哈哈', props.searchData);
    }, []);

    useEffect(() => {
        window.console.log('哈哈哈哈', props.searchData);
    }, [props.count]);

    useEffect(() => {
        window.console.log('aaaa', props.searchData);
    }, [props.a]);

    useEffect(() => {
        return () => {};
    });

    return (
        <div>哈哈哈哈</div>
    );
}

export default connect((state) => {
    return {
        searchData: state.search
    };
})(SearchTest);
