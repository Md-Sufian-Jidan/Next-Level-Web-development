import { Request, Response } from 'express';
import status from 'http-status';
import { catchAsync } from '../../shared/catchAsync';
import { sendResponse } from '../../shared/sendResponse';
import { StatsService } from './stats.service';

const getDashboardStatsData = catchAsync(async (req: Request, res: Response) => {
    const result = await StatsService.getDashboardStatsData();

    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: 'Dashboard stats fetched successfully',
        data: result,
    });
});

const getSuperAdminStatsData = catchAsync(async (req: Request, res: Response) => {
    const result = await StatsService.getSuperAdminStatsData();

    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: 'Super Admin stats fetched successfully',
        data: result,
    });
});

const getAdminStatsData = catchAsync(async (req: Request, res: Response) => {
    const result = await StatsService.getAdminStatsData();

    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: 'Admin stats fetched successfully',
        data: result,
    });
});

const getDoctorStatsData = catchAsync(async (req: Request, res: Response) => {
    const result = await StatsService.getDoctorStatsData();

    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: 'Doctor stats fetched successfully',
        data: result,
    });
});

const getPatientStatsData = catchAsync(async (req: Request, res: Response) => {
    const result = await StatsService.getPatientStatsData();

    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: 'Patient stats fetched successfully',
        data: result,
    });
});

const getPieChartData = catchAsync(async (req: Request, res: Response) => {
    const result = await StatsService.getPieChartData();

    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: 'Pie chart data fetched successfully',
        data: result,
    });
});

const getBarChartData = catchAsync(async (req: Request, res: Response) => {
    const result = await StatsService.getBarChartData();

    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: 'Bar chart data fetched successfully',
        data: result,
    });
});

export const StatsController = {
    getDashboardStatsData,
    getSuperAdminStatsData,
    getAdminStatsData,
    getDoctorStatsData,
    getPatientStatsData,
    getPieChartData,
    getBarChartData,
};
