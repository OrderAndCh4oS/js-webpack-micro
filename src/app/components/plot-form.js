/* eslint-disable react/prop-types,indent */
import React from 'react';
import {connect} from 'react-redux';
import {Line} from 'react-chartjs';
import {Form, withFormik} from 'formik';
import * as Yup from 'yup';

import * as actions from '../actions';
import * as plotForm from '../reducers/plot-form';

import {Column, ContainerPanel, Row} from './structure';
import {Input, MySlider, Switch} from './form-elements';

let PlotForm = ({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    isSubmitting,
                    isValid,
                    setFieldValue,
                    setFieldTouched
                }) => {
    const data = (() => {
        const data = [0];
        let i = 0;
        for (; i < values.points; i++) {
            data.push(Math.random() * values.fuzziness);
        }
        return data;
    })();
    const labels = (() => {
        const labels = [0];
        let i = 1;
        for (; i < values.points; i++) {
            labels.push(i);
        }
        return labels;
    })();
    console.log(data);
    const chartData = {
        labels: labels,
        datasets: [{
            fillColor: 'rgba(220,220,220,0.2)',
            label: 'My First dataset',
            pointColor: 'rgba(220,220,220,1)',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            pointStrokeColor: '#fff',
            strokeColor: 'rgba(220,220,220,1)',
            data: data
        }]
    };
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false

    };

    return (
        <ContainerPanel>
            <Row>
                <Column>
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        height: '400px',
                        overflow: 'hidden'
                    }}>
                        <Line data={chartData} options={chartOptions} width={1000} height={400}/>
                    </div>
                </Column>
            </Row>
            <Row>
                <Column>
                    <Form>
                        <Input name="points"
                               label="Points"
                               value={values.points}
                               type="number"
                               onChange={handleChange}
                               onBlur={handleBlur}
                               error={touched.points && errors.points}
                        />
                        <Switch
                            name="key"
                            label="Show Key"
                            value={values.key}
                            onChange={setFieldValue}
                            onBlur={setFieldTouched}
                            error={touched.key && errors.key}
                        />
                        <MySlider
                            name="fuzziness"
                            label="Fuzziness"
                            value={values.fuzziness}
                            decimals={1}
                            defaultValue={15} min={0} max={30} step={0.5}
                            onChange={setFieldValue}
                            onBlur={setFieldTouched}
                            error={touched.fuzziness && errors.fuzziness}
                        />
                        <button type="submit" disabled={isSubmitting || !isValid}>Update</button>
                        {isSubmitting ? <p>Updating...</p> : null}
                    </Form>
                </Column>
            </Row>
        </ContainerPanel>
    );
};

PlotForm = withFormik({
    mapPropsToValues: () => {
        return {
            points: 5,
            key: false,
            fuzziness: 15
        };
    },
    isInitialValid: true,
    handleSubmit: (
        values,
        {setSubmitting, props: {postPlotForm}}
    ) => {
        delete values.redux;
        console.log('values', values);
        postPlotForm(values).then(() => {
            setSubmitting(false);
        });
    },
    validationSchema: Yup.object().shape({
        points: Yup.number()
            .required('Number is required.')
            .min(0, 'At least 0')
            .max(200, 'At most 200'),
        fuzziness: Yup.number()
            .required('Fuzziness is required.')
            .default(15)
            .min(0, 'At least 0')
            .max(30, 'At most 30')
        ,
        key: Yup.boolean()
            .required('Key is required.')
            .default(false)
    })
})(PlotForm);

const mapStateToPlotFormProps = (state) => {
    return {
        redux: {
            plotForm: plotForm.getPlotForm(state.app.plotForm),
            isFetching: plotForm.isFetching(state.app.plotForm),
            isInvalid: plotForm.invalidRequest(state.app.plotForm),
            errorMessage: plotForm.errorMessage(state.app.plotForm)
        }
    };
};

PlotForm = connect(
    mapStateToPlotFormProps,
    actions
)(PlotForm);

export default PlotForm;
